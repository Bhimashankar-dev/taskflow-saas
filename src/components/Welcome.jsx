


function Welcome() {
  return (
    <section className="welcome">
      <div>
        <p className="eyebrow">YOUR WORKSPACE</p>
        <h1>Good morning, there! <span>✦</span></h1>
        <p className="welcome-description">
          Here's what's happening with your projects today.
        </p>
      </div>

      <button className="primary-button">
        <span>+</span> Add New Task
      </button>
    </section>
  );
}

export default Welcome;
