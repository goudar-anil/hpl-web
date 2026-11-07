
import imageCompression from "browser-image-compression";
import { allowedPhotoTypes, MAX_PHOTO_SIZE } from "../constants";

const MAX_ORIGINAL_PHOTO_SIZE = 20 * 1024 * 1024; // 20 MB

const compressionOptions = {
  maxSizeMB: 1,
  maxWidthOrHeight: 1600,
  useWebWorker: true,
  initialQuality: 0.8,
  preserveExif: false,
};

export async function compressPhoto(file: File): Promise<File> {
  // Validate the original image type.
  if (!allowedPhotoTypes.includes(file.type)) {
    throw new Error("Please upload a JPEG, PNG or WebP photo.");
  }

  // Prevent excessively large files from being processed in the browser.
  if (file.size > MAX_ORIGINAL_PHOTO_SIZE) {
    throw new Error("Please select a photo smaller than 20 MB.");
  }

  try {
    const compressedFile = await imageCompression(
      file,
      compressionOptions,
    );

    // The backend accepts a maximum of 5 MB.
    if (compressedFile.size > MAX_PHOTO_SIZE) {
      throw new Error(
        "Photo is still too large after compression. Please select another photo.",
      );
    }

    // Preserve the original filename and MIME type.
    return new File(
      [compressedFile],
      file.name,
      {
        type: compressedFile.type,
        lastModified: Date.now(),
      },
    );
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }

    throw new Error("Unable to compress the photo. Please try another image.");
  }
}
