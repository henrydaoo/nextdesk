declare global {
  interface Window {
    tidioChatApi?: {
      open: () => void;
      [key: string]: any;
    };
  }
}

export function openTidioChat() {
  if (window.tidioChatApi) {
    window.tidioChatApi.open();
  } else {
    const tidioScript = document.querySelector('script[src*="tidio.co"]');
    if (tidioScript) {
      tidioScript.addEventListener("load", () => {
        if (window.tidioChatApi) window.tidioChatApi.open();
      });
    }
  }
}
