function About() {
  return (
    <div className='container'>
      <h2>Welcome to Stripify</h2>
      <p>
        This is a simple React application demonstrating an integration with the
        Stripe API.
      </p>
      <p>
        NOTE: It is assumed that the application is running in a secure
        environment, therefore there is no access control or verification of
        credentials.
      </p>
    </div>
  );
}

export default About;
