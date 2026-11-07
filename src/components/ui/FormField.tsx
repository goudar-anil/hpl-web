import {Box, Text} from "@chakra-ui/react";
interface FormFieldProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}

function FormField({
  label,
  required = false,
  children,
}: FormFieldProps) {
  return (
    <Box>
      <Text
        as="label"
        display="block"
        color="brand.royalBlue"
        fontWeight="semibold"
        fontSize="sm"
        mb={2}
      >
        {label}
        {required && (
          <Text as="span" color="red.500">
            {" "}*
          </Text>
        )}
      </Text>
      {children}
    </Box>
  );
}

export default FormField;