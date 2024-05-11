import { useModal } from "@/components/Modal";
import { isModalOpen } from "@/stores/modalStore";
import { Button, DialogActions, DialogContent, Link } from "@mui/material";

const CopyrightContent = () => {
  const handleClose = () => {
    isModalOpen.set(false);
  };

  return (
    <>
      <DialogContent className="flex flex-col gap-4 CopyrightPrivacy">
        <p>
          If you require any more information or have any questions about our
          site's disclaimer, please feel free to contact us by email at{" "}
          <Link href="mailto:isekkumusic@gmail.com">
            {" "}
            isekkumusic@gmail.com
          </Link>
          . Our Disclaimer was generated with the help of the{" "}
          <Link href="https://www.disclaimergenerator.net/">
            Free Disclaimer Generator
          </Link>
          .
        </p>

        <h2>Props to other individuals</h2>

        <p>
          Photos: Étienne Meier zu Ahle Instagram: @etienne_mza Website:
          https://www.etiennemza.de/contact
        </p>

        <h2>Further disclaimers for Isekku</h2>

        <p>
          All the information on this website - https://isekku.netlify.app/ - is
          published in good faith and for general information purpose only.
          Isekku does not make any warranties about the completeness,
          reliability and accuracy of this information. Any action you take upon
          the information you find on this website (Isekku), is strictly at your
          own risk. Isekku will not be liable for any losses and/or damages in
          connection with the use of our website.
        </p>

        <p>
          From our website, you can visit other websites by following hyperlinks
          to such external sites. While we strive to provide only quality links
          to useful and ethical websites, we have no control over the content
          and nature of these sites. These links to other websites do not imply
          a recommendation for all the content found on these sites. Site owners
          and content may change without notice and may occur before we have the
          opportunity to remove a link which may have gone 'bad'.
        </p>

        <p>
          Please be also aware that when you leave our website, other sites may
          have different privacy policies and terms which are beyond our
          control. Please be sure to check the Privacy Policies of these sites
          as well as their "Terms of Service" before engaging in any business or
          uploading any information.
        </p>

        <h2>Consent</h2>

        <p>
          By using our website, you hereby consent to our disclaimer and agree
          to its terms.
        </p>

        <h2>Update</h2>

        <p>
          Should we update, amend or make any changes to this document, those
          changes will be prominently posted here.
        </p>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>close</Button>
      </DialogActions>
    </>
  );
};

export const CopyrightModal = () => {
  useModal({
    open: true,
    title: "Copyright Notice",
    content: <CopyrightContent />,
  });
};
