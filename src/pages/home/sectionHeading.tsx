import Heading from "./heading";

export default function SectionHeading(props: { label: string }) {
  const { label } = props;
  
  return (
    <Heading
      label={label}
      typographyStyles={{ fontWeight: 600 }}
      variant="h6"
      styles={{ mt: 5, mb: 2.5 }}
    />
  );
}
