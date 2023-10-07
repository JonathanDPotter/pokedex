import React, { FC } from "react";
import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";

interface Props {
  buttonText: string;
  cardText: string;
}

const CollapseDefault: FC<Props> = ({ buttonText, cardText }) => {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Button onClick={toggleOpen} className="w-full">
        {buttonText}
      </Button>
      <Collapse open={open}>
        <Card className="my-4 mx-auto w-8/12">
          <CardBody>
            <Typography>{cardText}</Typography>
          </CardBody>
        </Card>
      </Collapse>
    </>
  );
};

export default CollapseDefault;
