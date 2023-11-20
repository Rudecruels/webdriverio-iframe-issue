describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await browser.url("https://iframetester.com/");
    await browser.pause(5000);

    const inputSelector = $("/html/body/main/div[1]/input");
    await inputSelector.setValue("https://www.wikipedia.org/");
    browser.saveScreenshot("/tmp/screenshot1.png");

    const RenderSelector = $("/html/body/main/div[1]/button");
    await RenderSelector.click();
    await browser.pause(6000);
    browser.saveScreenshot("/tmp/screenshot2.png");

    await browser.switchToFrame(0);

    const iframeClickSelector = $("/html/body/div[2]/div[1]/a/strong");
    await iframeClickSelector.click();
    browser.saveScreenshot("/tmp/screenshot3.png");

    await browser.pause(5000);
    browser.saveScreenshot("/tmp/screenshot4.png");
    await browser.pause(5000);
  });
});
