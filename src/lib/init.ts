import {
  expandViewport,
  backButton,
  viewport,
  themeParams,
  miniApp,
  initData,
  $debug,
  init as initSDK,
  isCloudStorageSupported,
  closingBehavior,
} from "@telegram-apps/sdk-react";

/**
 * Initializes the application and configures its dependencies.
 */
export function init(debug: boolean): void {
  // Set @telegram-apps/sdk-react debug mode.
  $debug.set(debug);

  // Initialize special event handlers for Telegram Desktop, Android, iOS, etc.
  // Also, configure the package.
  initSDK();

  // Mount all components used in the project.
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  backButton.isSupported() && backButton.mount();
  miniApp.mount();
  themeParams.mount();
  expandViewport();
  initData.restore();
  void viewport.mount().catch((e) => {
    console.error("Something went wrong mounting the viewport", e);
  });
  closingBehavior.mount();
  closingBehavior.enableConfirmation();

  isCloudStorageSupported(); // boolean
  // Define components-related CSS variables.
  viewport.bindCssVars();
  miniApp.bindCssVars();

  themeParams.bindCssVars();

  // Set header color to black if supported
  if (miniApp.setHeaderColor.isSupported() && miniApp.setHeaderColor.supports('color')) {
    miniApp.setHeaderColor('#000000'); // Set to black
    console.log('Header color set to:', miniApp.headerColor()); 
  } else {
    console.log('Header color setting is not supported.');
  }


  // Add Eruda if needed.
  // debug && import('eruda')
  //   .then((lib) => lib.default.init())
  //   .catch(console.error);
}
