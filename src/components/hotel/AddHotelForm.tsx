import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Checkbox,
  CheckboxGroup,
  Flex,
  Select,
  Button,
  Stack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

// Define TypeScript types for form data
interface FormValues {
  title: string;
  description: string;
  image: File | null;
  country: string;
  state: string;
  city: string;
  address: string;
  amenities: string[];
}

const initialValues: FormValues = {
  title: "",
  description: "",
  image: null,
  country: "",
  state: "",
  city: "",
  address: "",
  amenities: [],
};

const validationSchema = Yup.object().shape({
  title: Yup.string().min(3, "Title must be at least 3 characters").required("Title is required"),
  description: Yup.string().min(10, "Description must be at least 10 characters").required("Description is required"),
  image: Yup.mixed().required("Image is required"),
  country: Yup.string().required("Country is required"),
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
  address: Yup.string().required("Address is required"),
});

const AddHotelForm: React.FC = () => {
    const formik = useFormik<FormValues>({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box maxW={{ base: "90%", md: "80%" }} mx="auto">
    <form onSubmit={formik.handleSubmit}>
      <Flex flexDir={{ base: "column", md: "row"}}>
        {/* Left Side */}
        <Box flexBasis={{ base: "100%", md: "50%" }} px={4} mb={{ base: 4, md: 0 }}>
          <FormControl mb={4}>
            <FormLabel>Title</FormLabel>
            <Input
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.title && !!formik.errors.title}
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Description</FormLabel>
            <Textarea
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.description && !!formik.errors.description}
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Amenities</FormLabel>
            <CheckboxGroup value={formik.values.amenities} onChange={(values) => formik.setFieldValue("amenities", values)}>
              <Stack direction="row">
                <Stack>
                  <Checkbox value="gym">Gym</Checkbox>
                  <Checkbox value="spa">Spa</Checkbox>
                  <Checkbox value="bar">Bar</Checkbox>
                  <Checkbox value="laundry">Laundry</Checkbox>
                </Stack>
                <Stack>
                  <Checkbox value="restaurant">Restaurant</Checkbox>
                  <Checkbox value="shopping">Shopping</Checkbox>
                  <Checkbox value="freeparking">Free Parking</Checkbox>
                  <Checkbox value="bikeRental">Bike Rental</Checkbox>
                </Stack>
              </Stack>
            </CheckboxGroup>
          </FormControl>
        </Box>
        {/* Right Side */}
        <Box flexBasis={{ base: "100%", md: "50%" }} px={4}>
          <FormControl mb={4}>
            <FormLabel>Country</FormLabel>
            <Select
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.country && !!formik.errors.country}
            >
              {/* Options for country */}
            </Select>
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>State</FormLabel>
            <Select
              name="state"
              value={formik.values.state}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.state && !!formik.errors.state}
            >
              {/* Options for state */}
            </Select>
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>City</FormLabel>
            <Select
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.city && !!formik.errors.city}
            >
              {/* Options for city */}
            </Select>
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Address</FormLabel>
            <Textarea
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.address && !!formik.errors.address}
            />
          </FormControl>
        </Box>
      </Flex>
      <Box
      display="flex"
      justifyContent={{ base: "center", md: "flex-start"}}
      alignItems="center"
      >
      <Button 
      type="submit" 
      mt={4} 
      colorScheme="brand" 
      isLoading={formik.isSubmitting} 
      >
        Submit
      </Button>
      </Box>
    </form>
    </Box>
  );
};

export default AddHotelForm;
