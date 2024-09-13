import Heading from "../../../heading";

export default function Title({ label }: { label: string }) {
  return (
    <Heading
      label={label}
      typographyStyles={{ fontWeight: 500 }}
      variant="body1"
      styles={{ mb: 2 }}
    />
  );
}
