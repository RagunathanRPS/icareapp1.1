import React from "react";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div>
      <h2 className="font-bold pb-10">Permissions</h2>
      <h3 className="font-medium pb-2">
        Do I need to verify my iCareForex account?
      </h3>
      <hr />
      <p className="pb-2 pt-2">
        No, you do not need to verify your iCareForex account unless prompted. If
        your account requires verification, we will contact you via email to
        initiate the process and provide you with clear instructions on how to
        submit your documents.
      </p>
      <br />
      <h3 className="font-medium pb-2">Why were my documents declined?</h3>
      <hr />
      <p className="pb-2 pt-2">
        We may decline your verification documents if they are insufficiently
        clear, invalid, expired, or have cropped edges.
      </p>
      <br />
      <h3 className="font-medium pb-2">
        How can I identify emails from impersonators of iCareForex customer support?
      </h3>
      <hr />
      <p className="pb-2 pt-2">
        Here are some ways to identify emails from impersonators: <br />
        The email is poorly written, has incorrect grammar, and has many typos.
        Impersonators ask you to send confidential information over an unsecure
        platform, for example, via SMS, WhatsApp, email, etc. <br />
        They ask you to fill out a form on an unsecure website without an HTTPS
        (secured) connection. <br />
        They ask you to download unsecure mobile apps in the form of APK files
        that aren’t offered on Google Play Store or Apple App Store. <br />
        They ask you to download file attachments or remote access software
        (such as Teamviewer) to give them remote control of your device. <br />
        For example, an impersonator may take control and install ransomware on
        your device and then demand a ransom.
        <br />
        If the ransom isn’t paid, you may lose access to your device
        permanently. <br />
        Impersonators typically use free email domains such as @yahoo.com,
        @gmail.com, or @protonmail.com. Always read the sender's full email
        address to know who sent the email. Note: Emails from iCareForex will
        always come from @icareforex.com.
      </p>
      <div>
        <Button variant="destructive" size="sm">
          <a
            href="http://localhost:3000/app1/settings"
            rel="noopener noreferer"
          >
            Settings
          </a>
        </Button>
      </div>
    </div>
  );
};

export default page;
