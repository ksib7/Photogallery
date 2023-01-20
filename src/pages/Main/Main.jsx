import React, { useState } from "react";

import { Header } from "@/components/Header/Header";
import { FormUpload } from "@/components/FormUpload/FormUpload";
import { CardImages } from "@/components/CardImages/CardImages";
import { Modal } from "@/components/Modal/Modal";

export const Main = () => {
  const [open, setOpen] = useState(null);

  return (
    <div>
      <Header />
      <FormUpload />
      <CardImages setOpen={setOpen} />
      {open && <Modal open={open} setOpen={setOpen} />}
    </div>
  );
};
