import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex">
      <Image src="/images/logo.png" width={50} height={50} alt="logo" />
      <Image
        height={50}
        width={100}
        className="block-header-logo__image"
        src="/images/title.svg"
        alt="Openzo logo"
        data-v-525b292a=""
        data-qa="builder-siteheader-img-logo"
      ></Image>
    </div>
  );
};

export default Logo;
