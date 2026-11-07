
import { useEffect, useState, type FormEvent } from "react";
import {
  Box,
  Container,
  VStack,
  Text,
  Heading,
  Input,
  Button,
  Image,
} from "@chakra-ui/react";

import type { RegisterPlayerFormValue } from "../types/RegisterPlayerTypes";
import FormField from "../components/ui/FormField";
import { allowedPhotoTypes, MAX_PHOTO_SIZE } from "../constants";
import { compressPhoto } from "../utils/index";
import { api } from "../services/api";
const today = new Date().toLocaleDateString("en-CA");

const initialValues: RegisterPlayerFormValue = {
  fullName: "",
  phone: "",
  dob: "",
  playingRole: "",
  village: "",
};

const formatFileSize = (size: number) => {
  return `${(size / (1024 * 1024)).toFixed(2)} MB`;
};

const RegistrationPage = () => {
  const [values, setValues] =
    useState<RegisterPlayerFormValue>(initialValues);

  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState("");
  const [originalPhotoSize, setOriginalPhotoSize] = useState<number | null>(null);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [compressing, setCompressing] = useState(false);

  useEffect(() => {
    return () => {
      if (photoPreview) {
        URL.revokeObjectURL(photoPreview);
      }
    };
  }, [photoPreview]);

  function updateField(
    field: keyof RegisterPlayerFormValue,
    value: string,
  ) {
    setValues((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function handlePhotoChange(file: File | undefined) {
    setError("");
    setSuccess("");
    setPhoto(null);
    setPhotoPreview("");
    setOriginalPhotoSize(null);

    if (!file) return;

    if (!allowedPhotoTypes.includes(file.type)) {
      setError("Please upload a JPEG, PNG or WebP photo.");
      return;
    }

    // Allow larger originals because compression happens in the browser.
    const MAX_ORIGINAL_SIZE = 20 * 1024 * 1024;

    if (file.size > MAX_ORIGINAL_SIZE) {
      setError("Please select a photo smaller than 20 MB.");
      return;
    }

    setCompressing(true);

    try {
      const compressedPhoto = await compressPhoto(file);

      if (compressedPhoto.size > MAX_PHOTO_SIZE) {
        throw new Error("Compressed photo must not exceed 5 MB.");
      }

      setPhoto(compressedPhoto);
      setOriginalPhotoSize(file.size);
      setPhotoPreview(URL.createObjectURL(compressedPhoto));
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to process the selected photo.",
      );
    } finally {
      setCompressing(false);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (!photo) {
      setError("Please select a valid player photo.");
      return;
    }

    if (photo.size > MAX_PHOTO_SIZE) {
      setError("Photo size must not exceed 5 MB.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("fullName", values.fullName.trim());
      formData.append("phone", values.phone);
      formData.append("dob", values.dob);
      formData.append("playingRole", values.playingRole);
      formData.append("village", values.village.trim());
      formData.append("photo", photo, photo.name);

      await api.post("/api/v1/players", formData);

      setSuccess(
        "Registration submitted successfully! Your details are pending review.",
      );

      setValues(initialValues);
      setPhoto(null);
      setOriginalPhotoSize(null);
      setPhotoPreview("");

      const fileInput = document.getElementById(
        "player-photo",
      ) as HTMLInputElement | null;

      if (fileInput) {
        fileInput.value = "";
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to submit registration. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box bg="brand.ivory" minH="100vh" py={{ base: 8, md: 14 }}>
    {success && (
            <Box
                bg="green.50"
                color="green.700"
                p={3}
                borderRadius="md"
                role="status"
            >
                <Text fontSize="sm">{success}</Text>
            </Box>
    )}
      <Container maxW="760px">
        <VStack align="stretch" gap={7}>
          <Box textAlign="center">
            <Text
              color="#9A7620"
              fontSize="sm"
              fontWeight="bold"
              letterSpacing="widest"
              mb={3}
            >
              HADAGALI PREMIER LEAGUE
            </Text>

            <Heading
              color="brand.royalBlue"
              fontSize={{ base: "2xl", md: "4xl" }}
            >
              Player Registration
            </Heading>

            <Text color="gray.600" mt={3}>
              Fill in your details to register as an HPL player.
            </Text>
          </Box>

          <Box
            as="form"
            onSubmit={handleSubmit}
            bg="white"
            p={{ base: 5, md: 9 }}
            borderRadius="xl"
            boxShadow="md"
          >
            <VStack align="stretch" gap={5}>
              <FormField label="Full Name" required>
                <Input
                  name="fullName"
                  value={values.fullName}
                  onChange={(e) =>
                    updateField("fullName", e.target.value)
                  }
                  placeholder="Enter your full name"
                  maxLength={100}
                  required
                />
              </FormField>

              <FormField label="Phone Number" required>
                <Input
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  value={values.phone}
                  onChange={(e) =>
                    updateField(
                      "phone",
                      e.target.value.replace(/\D/g, "").slice(0, 10),
                    )
                  }
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  pattern="[0-9]{10}"
                  required
                />
              </FormField>

              <FormField label="Date of Birth" required>
                <Input
                  name="dob"
                  type="date"
                  value={values.dob}
                  onChange={(e) =>
                    updateField("dob", e.target.value)
                  }
                  max={today}
                  required
                />
              </FormField>

              <FormField label="Playing Role" required>
                <Box
                  as="select"
                  name="playingRole"
                  value={values.playingRole}
                  onChange={(e) =>
                    updateField("playingRole", e.target.value)
                  }
                  required
                  w="full"
                  h="40px"
                  px={3}
                  bg="white"
                  borderWidth="1px"
                  borderColor="gray.200"
                  borderRadius="md"
                  color={values.playingRole ? "gray.800" : "gray.500"}
                >
                  <option value="" disabled>
                    Select your playing role
                  </option>
                  <option value="BATSMAN">Batsman</option>
                  <option value="BOWLER">Bowler</option>
                  <option value="ALL_ROUNDER">All-Rounder</option>
                  <option value="WICKET_KEEPER">Wicket Keeper</option>
                </Box>
              </FormField>

              <FormField label="Village" required>
                <Input
                  name="village"
                  value={values.village}
                  onChange={(e) =>
                    updateField("village", e.target.value)
                  }
                  placeholder="Enter your village"
                  maxLength={100}
                  required
                />
              </FormField>

              <FormField label="Player Photo" required>
                <Input
                  id="player-photo"
                  name="photo"
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={(e) =>
                    handlePhotoChange(e.target.files?.[0])
                  }
                  p={1}
                  required={!photo}
                  disabled={compressing || loading}
                />

                <Text fontSize="xs" color="gray.500" mt={2}>
                  Accepted formats: JPEG, PNG and WebP.
                  Original photo limit: 20 MB. Compressed photo limit: 5 MB.
                </Text>

                {compressing && (
                  <Text fontSize="sm" color="blue.600" mt={3}>
                    Compressing photo. Please wait...
                  </Text>
                )}

                {photo && photoPreview && (
                  <VStack align="start" mt={3} gap={2}>
                    <Image
                      src={photoPreview}
                      alt="Compressed player photo preview"
                      boxSize="140px"
                      objectFit="cover"
                      borderRadius="lg"
                    />

                    <Text fontSize="sm" color="green.700">
                      Photo ready for upload
                    </Text>
                  </VStack>
                )}
              </FormField>

              {error && (
                <Box
                  bg="red.50"
                  color="red.700"
                  p={3}
                  borderRadius="md"
                  role="alert"
                >
                  <Text fontSize="sm">{error}</Text>
                </Box>
              )}

              <Button
                type="submit"
                size="lg"
                bg="brand.royalBlue"
                color="white"
                loading={loading}
                disabled={loading || compressing || !photo}
                _hover={{ bg: "#243B75" }}
                mt={2}
              >
                Submit Registration
              </Button>

              <Text
                color="gray.500"
                fontSize="xs"
                textAlign="center"
              >
                Please verify your details before submitting.
                Your phone number can only be registered once.
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default RegistrationPage;
