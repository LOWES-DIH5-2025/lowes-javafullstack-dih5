import "./Subscription.css";

const Subscription = () => {
  // internal styles
  const subscriptionStyles = {
    renewStyles: {
      color: "#000",
      backgroundColor: "yellow",
      border: "dashed 5px blue",
      borderRadius: "10px",
      padding: "20px",
    },
    btnStyles: {
      border: "solid 2px red",
      backgroundColor: "red",
      color: "#fff",
      padding: "10px 20px",
    },
  };

  return (
    <div className="subscription text-center">
      {/* External CSS-- [RECOMMENDED] Subscription.css */}
      <h3 className="subscription-info">
        You are an Active Subscriber of Netflix
      </h3>

      {/* Inline CSS - NEVER EVER WRITE THIS IN LISTS / LOOPS */}
      <p
        style={{
          color: "red",
          backgroundColor: "yellow",
          border: "solid 3px red",
          padding: "20px",
          borderRadius: "6px",
        }}
      >
        Your Subscription will end in two weeks
      </p>

      {/* Internal CSS - Not recommended often */}
      <p style={subscriptionStyles.renewStyles}>
        Renew Now and get 50% discount. Apply Coupon: OFFER50
      </p>
      <button type="button" style={subscriptionStyles.btnStyles}>
        RENEW NOW
      </button>
    </div>
  );
};

export default Subscription;
