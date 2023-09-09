import { convertDate } from "@/utils/common";

describe("Utils ", () => {
  const DATE = "2023.08.08 23:11";
  it("convert date ", () => {
    expect(convertDate(DATE)).toBe("2023.08.08");
  });
});

export {};
