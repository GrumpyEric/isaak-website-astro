import { useModal } from "@/components/Modal";
import { isModalOpen } from "@/stores/modalStore";
import { Button, DialogActions, DialogContent, Link } from "@mui/material";

const PrivacyContent = () => {
  const handleClose = () => {
    isModalOpen.set(false);
  };

  return (
    <>
      <DialogContent className="flex flex-col gap-4 CopyrightPrivacy">
        <p>
          Isekku operates the{" "}
          <Link href="https://isekku.netlify.app/" target="_blank">
            https://isekku.netlify.app/
          </Link>{" "}
          website, which provides the SERVICE.
        </p>

        <p>
          This page is used to inform website visitors regarding our policies
          with the collection, use, and disclosure of Personal Information if
          anyone decided to use our Service, the Isekku website.
        </p>

        <h2>Information Collection and Use</h2>

        <p>
          We do not collect any information. You can decide, what information
          you hand out, when writing me an E-mail.
        </p>

        <h2>Cookies</h2>

        <p>We do not use any cookies.</p>

        <h2>Service Providers</h2>

        <p>
          We may employ third-party companies and individuals due to the
          following reasons:
        </p>

        <ul>
          <li>To facilitate our Service;</li>
          <li>To provide the Service on our behalf;</li>
          <li>To perform Service-related services; or</li>
          <li>To assist us in analyzing how our Service is used.</li>
        </ul>

        <p>
          We want to inform our Service users that these third parties have
          access to your Personal Information. The reason is to perform the
          tasks assigned to them on our behalf. However, they are obligated not
          to disclose or use the information for any other purpose.
        </p>

        <h2>Links to Other Sites</h2>

        <p>
          Our Service may contain links to other sites. If you click on a
          third-party link, you will be directed to that site. Note that these
          external sites are not operated by us. Therefore, we strongly advise
          you to review the Privacy Policy of these websites. We have no control
          over, and assume no responsibility for the content, privacy policies,
          or practices of any third-party sites or services.
        </p>

        <h2>Changes to This Privacy Policy</h2>

        <p>
          We may update our Privacy Policy from time to time. Thus, we advise
          you to review this page periodically for any changes. We will notify
          you of any changes by posting the new Privacy Policy on this page.
          These changes are effective immediately, after they are posted on this
          page.
        </p>

        <p>
          Our Privacy Policy was created with the help of the{" "}
          <Link href="https://www.privacypolicytemplate.net" target="_blank">
            Privacy Policy Template
          </Link>
          .
        </p>

        <h2>Contact Us</h2>

        <p>
          If you have any questions or suggestions about our Privacy Policy, do
          not hesitate to contact us via{" "}
          <Link href="mailto:isekkumusic@gmail.com" target="_blank">
            isekkumusic@gmail.com
          </Link>
          .
        </p>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>close</Button>
      </DialogActions>
    </>
  );
};

export const PrivacyModal = () => {
  useModal({
    open: true,
    title: "Privacy Notice",
    content: <PrivacyContent />,
  });
};
