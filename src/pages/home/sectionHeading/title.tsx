import Heading from "../heading";

export default function Title(props: { label: string }) {
  const { label } = props;

  return (
    <Heading
      label={label}
      typographyStyles={{ fontWeight: 600 }}
      variant="h6"
    />
  );
}
