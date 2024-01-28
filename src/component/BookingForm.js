import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function BookingForm() {
  const [datePicker, setDatePicker] = useState("");

  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Size</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Slot</Form.Label>
          <DatePicker
            selected={datePicker}
            showTimeSelect
            dateFormat="d MMMM  yyyy h:mm aa"
            placeholderText="Time Slot"
            showPreviousMonths={false}
            onChange={(value) => {
              setDatePicker(value);
            }}
            minDate={new Date()}
          />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Proceed to Payment
      </Button>
    </Form>
  );
}

export default BookingForm;
