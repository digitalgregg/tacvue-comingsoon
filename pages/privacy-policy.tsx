import React from "react";
import Header from "../components/Header";
import PrivacyPolicyContent from "../components/PrivacyPolicyContent";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <section className="bg-[#15182B]">
        <div className="container py-20 pt-40 space-y-9">
          <h1 className="text-5xl font-medium !mb-10">TacVue Privacy Policy</h1>
          <PrivacyPolicyContent />
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
