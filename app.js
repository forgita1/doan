// App.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Student from './Student/Student';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './css/styles.css'; // Import your custom styles

const studentData = [
  { id: 1, name: 'Nguyen Van A', image: 'Tự điền ảnh', email: 'gmail@gmail.com' },
  { id: 2, name: 'Nguyen Van B', image: 'Tự điền ảnh', email: 'gmail@gmail.com' },
  // Add more student data as needed
];

const App = () => {
  return (
    <Container>
      <h1 className="mt-5 mb-4">Student List</h1>
      <Row>
        {studentData.map(student => (
          <Col key={student.id} xs={12} md={6} lg={4}>
            <Student {...student} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;