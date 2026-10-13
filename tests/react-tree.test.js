// @vitest-environment jsdom
import { describe, it, expect, afterEach, vi } from "vitest";
import React, { useState } from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import BeforeTree from "react-tree-before";
import AfterTree from "react-tree-after";
const modes = ["all", "parentFirst", "onlyLeaf"];
const data = [
  {
    value: "P",
    label: "Parent",
    children: [
      { value: "A", label: "A" },
      { value: "B", label: "B" },
      { value: "D", label: "Disabled", disabled: true },
    ],
  },
];
const cleanup = [];
afterEach(() => {
  cleanup.splice(0).forEach((fn) => fn());
});
async function mount(Component, mode, initial = []) {
  const host = document.createElement("div");
  document.body.appendChild(host);
  const value = { value: initial },
    onChange = vi.fn();
  function ControlledTree() {
    const [current, setCurrent] = useState(initial);
    value.value = current;
    return React.createElement(Component, {
      data,
      checkable: true,
      expandAll: true,
      transition: false,
      valueMode: mode,
      value: current,
      onChange: (next, context) => {
        onChange(next, context);
        setCurrent(next);
      },
    });
  }
  const rendered = render(React.createElement(ControlledTree), { container: host });
  cleanup.push(() => {
    rendered.unmount();
    host.remove();
  });
  const input = (id) =>
    host.querySelector(`[data-value="${id}"] input[type="checkbox"]`);
  await waitFor(() => expect(input("D")).toBeTruthy());
  return {
    host,
    value,
    onChange,
    input,
    click: async (id) => {
      fireEvent.click(input(id));
    },
  };
}
const expected = (mode) =>
  mode === "all"
    ? ["P", "A", "B"]
    : mode === "parentFirst"
      ? ["P"]
      : ["A", "B"];
const half = (host, id) =>
  host
    .querySelector(`[data-value="${id}"] .t-checkbox`)
    .classList.contains("t-is-indeterminate");
describe("React real controlled Tree A/B", () => {
  it.each(modes)("baseline reproduces half selection in %s", async (mode) => {
    const { host, input, value, click } = await mount(BeforeTree, mode);
    await click("P");
    await waitFor(() => expect(value.value).toEqual(["A", "B"]));
    await waitFor(() => expect(half(host, "P")).toBe(true));
    expect(
      host
        .querySelector('[data-value="P"] .t-checkbox')
        .classList.contains("t-is-checked"),
    ).toBe(false);
    expect(input("D").checked).toBe(false);
  });
  it.each(modes)(
    "fixed parent checking and cancellation round-trip in %s",
    async (mode) => {
      const { host, input, value, click } = await mount(AfterTree, mode);
      await click("P");
      await waitFor(() => expect(input("P").checked).toBe(true));
      expect(value.value).toEqual(expected(mode));
      expect(half(host, "P")).toBe(false);
      expect(input("D").disabled).toBe(true);
      expect(input("D").checked).toBe(false);
      await click("P");
      await waitFor(() => expect(value.value).toEqual([]));
      await waitFor(() => expect(input("P").checked).toBe(false));
      expect(half(host, "P")).toBe(false);
    },
  );
  it.each(modes)(
    "enabled children derive partial and full selection in %s",
    async (mode) => {
      const { host, input, value, click } = await mount(AfterTree, mode);
      await click("A");
      await waitFor(() => expect(half(host, "P")).toBe(true));
      await click("B");
      await waitFor(() => expect(input("P").checked).toBe(true));
      expect(half(host, "P")).toBe(false);
      expect(value.value).toEqual(expected(mode));
      await click("A");
      await waitFor(() => expect(half(host, "P")).toBe(true));
      expect(value.value).toEqual(["B"]);
    },
  );
  it.each(["all", "parentFirst"])(
    "retains a selected disabled child in %s",
    async (mode) => {
      const { input, value, click } = await mount(AfterTree, mode, ["D"]);
      await click("P");
      await waitFor(() => expect(input("P").checked).toBe(true));
      expect(value.value).toEqual(
        mode === "all" ? ["P", "A", "B", "D"] : ["P", "D"],
      );
      expect(input("D").checked).toBe(true);
      await click("P");
      await waitFor(() => expect(value.value).toEqual(["D"]));
      await waitFor(() => expect(input("P").checked).toBe(false));
      expect(input("D").checked).toBe(true);
    },
  );
});
