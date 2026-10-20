import { WebPlugin } from '@capacitor/core';
import type { DocumentRecognitionSdkPlugin } from './definitions';

export class DocumentRecognitionSdkWeb
  extends WebPlugin
  implements DocumentRecognitionSdkPlugin
{
  private unsupported(): never {
    throw this.unimplemented(
      'DocumentRecognitionSdk requires a native Android or iOS build (Capacitor).'
    );
  }

  async getMachineCode(): Promise<{ value: string }> {
    this.unsupported();
  }

  async setActivation(_options: {
    license: string;
  }): Promise<{ value: number }> {
    this.unsupported();
  }

  async init(): Promise<{ value: number }> {
    this.unsupported();
  }

  async deinit(): Promise<void> {
    this.unsupported();
  }

  async startNewSession(_options?: {
    optionsJson?: string;
  }): Promise<{ value: string }> {
    this.unsupported();
  }

  async locateDocument(_options: {
    image: string;
    alreadyCropped?: boolean;
  }): Promise<{ value: string }> {
    this.unsupported();
  }

  async recognize(_options: {
    front: string;
    back?: string | null;
    authenticity?: boolean;
    authenticityMode?: string;
    alreadyCropped?: boolean;
  }): Promise<{ value: string }> {
    this.unsupported();
  }

  async documentRecognition(_options: {
    front: string;
    back?: string | null;
    alreadyCropped?: boolean;
  }): Promise<{ value: string }> {
    this.unsupported();
  }

  async documentLiveness(_options: {
    front: string;
    back?: string | null;
    alreadyCropped?: boolean;
  }): Promise<{ value: string }> {
    this.unsupported();
  }

  async documentProcess(_options: {
    imagesJson?: string;
    images?: string;
    rfidJson?: string;
    rfid?: string;
    optionsJson?: string;
    options?: string;
  }): Promise<{ value: string }> {
    this.unsupported();
  }

  async faceLiveness(_options: {
    image?: string;
    portrait?: string;
    mode?: number;
  }): Promise<{ value: string }> {
    this.unsupported();
  }

  async lastLicenseError(): Promise<{ value: string }> {
    this.unsupported();
  }

  async getLicenseStatus(): Promise<{ value: string }> {
    this.unsupported();
  }

  async writeStatus(_options: { payload: string }): Promise<void> {
    this.unsupported();
  }

  async startLivePreview(_options?: { frontCamera?: boolean }): Promise<void> {
    this.unsupported();
  }

  async stopLivePreview(): Promise<void> {
    this.unsupported();
  }

  async takeLiveSnapshot(): Promise<{
    uri: string;
    path: string;
    width?: number;
    height?: number;
  }> {
    this.unsupported();
  }

  async cropToGuide(_options: {
    image: string;
    viewW: number;
    viewH: number;
    previewW?: number;
    previewH?: number;
  }): Promise<{ value: string }> {
    this.unsupported();
  }
}
