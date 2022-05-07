import { Form, Button } from 'react-bootstrap';
import iso31661a2 from 'iso-3166-1-alpha-2';

function CreateAccount() {
  const countries = iso31661a2.getData();

  return (
    <div className='container'>
      <Form>
        <Form.Group className='mb-3' controlId='type'>
          <Form.Label>Account Type</Form.Label>
          <Form.Select defaultValue=''>
            <option value='' disabled />
            <option value='custom'>Custom</option>
            <option value='express'>Express</option>
            <option value='standard'>Standard</option>
          </Form.Select>
          <Form.Text className='text-danger'>Required</Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='country'>
          <Form.Label>Country</Form.Label>
          <Form.Select defaultValue=''>
            <option value='' disabled />
            {Object.keys(countries).map((countryCode, i) => {
              return (
                <option key={i} value={countryCode}>
                  {countries[countryCode]}
                </option>
              );
            })}
          </Form.Select>
          <Form.Text className='text-muted'>
            Default is the platform's country.
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default CreateAccount;
