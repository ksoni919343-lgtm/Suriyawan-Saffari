import { BrowserQRCodeReader } from '@zxing/browser';

export async function scanBarcode(videoElement) {
  const codeReader = new BrowserQRCodeReader();
  return await codeReader.decodeFromVideoDevice(undefined, videoElement, (result) => result.text);
}
