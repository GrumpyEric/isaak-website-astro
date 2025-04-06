import { useModal } from "@/components/Modal";
import { isModalOpen } from "@/stores/modalStore";
import { Button, DialogActions, DialogContent, Link } from "@mui/material";
import {
  FaInstagram,
  FaPatreon,
  FaSpotify,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const ContactContent = () => {
  const handleClose = () => {
    isModalOpen.set(false);
  };

  return (
    <>
      <DialogContent className="flex flex-col gap-4 CopyrightPrivacy">
        <div className="flex flex-col items-center pb-8 gap-4">
          <p className="text-text text-[3vb] desktop-lg:text-[2.625vb] flex-grow-0 flex-shrink-0 basis-[33.33% - 20px]">
            Visit my social media pages!
          </p>

          <div className="flex flex-row flex-wrap justify-center gap-[4.5vb]">
            <a
              // social icons
              className="text-text text-[3vb] desktop-lg:text-[2.625vb] flex-grow-0 flex-shrink-0 basis-[33.33% - 20px]"
              href="https://open.spotify.com/intl-de/artist/3L8Rwqoo75Sx8LtX4QPyxz?si=REGwxvCpRt6OlwuGCn3zNw"
              target="_blank"
            >
              <FaSpotify />
            </a>

            <a
              className="text-text text-[3vb] desktop-lg:text-[2.625vb] flex-grow-0 flex-shrink-0 basis-[33.33% - 20px]"
              href=""
              target="_blank"
            >
              <FaPatreon />
            </a>

            <a
              className="text-text text-[3vb] desktop-lg:text-[2.625vb] flex-grow-0 flex-shrink-0 basis-[33.33% - 20px]"
              href="https://www.instagram.com/isekku/"
              target="_blank"
            >
              <FaInstagram />
            </a>

            <a
              className="text-text text-[3vb] desktop-lg:text-[2.625vb] flex-grow-0 flex-shrink-0 basis-[33.33% - 20px]"
              href="https://www.youtube.com/channel/UCgmueJwQXSEFmaIpoE5i0-A"
              target="_blank"
            >
              <FaYoutube />
            </a>

            <a
              className="text-text text-[3vb] desktop-lg:text-[2.625vb] flex-grow-0 flex-shrink-0 basis-[33.33% - 20px]"
              href="https://www.twitch.tv/isekku"
              target="_blank"
            >
              <FaTwitch />
            </a>

            <a
              className="text-text text-[3vb] desktop-lg:text-[2.625vb] flex-grow-0 flex-shrink-0 basis-[33.33% - 20px]"
              href="https://twitter.com/YTIsekku"
              target="_blank"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>close</Button>
      </DialogActions>
    </>
  );
};

export const ContactModal = () => {
  useModal({
    open: true,
    title: "My contacts",
    content: <ContactContent />,
  });
};
