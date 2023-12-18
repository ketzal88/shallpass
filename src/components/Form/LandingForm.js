import { Row } from "react-bootstrap";
import { Form } from "./Form";

import "./LandingForm.scss";

export const LandingForm = () => {
  const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY } =
    process.env;

  return (
    <Row className="justify-content-md-center ">
      <div className="landingForm">
        <Form
          SERVICE_ID={REACT_APP_SERVICE_ID}
          TEMPLATE_ID={REACT_APP_TEMPLATE_ID}
          PUBLIC_KEY={REACT_APP_PUBLIC_KEY}
          id="formFooter"
        />
      </div>
    </Row>
  );
};
