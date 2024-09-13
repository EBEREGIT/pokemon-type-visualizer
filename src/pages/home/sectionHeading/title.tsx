import Heading from "../heading";

export default function Title({ label }: { label: string }) {

  return (
    <Heading
      label={label}
      typographyStyles={{ fontWeight: 600 }}
      variant="h6"
    />
  );
}
