import Image from "next/image";

export default function MinimalFooter() {
  return (
    <div>
      <hr />
      <div className="flex p-2 justify-center flex-col items-center">
        <h1 className="my-2 mb-5">© 2026 All Right Reserved</h1>
        <Image src={"/8848.png"} height={20} width={60} alt="Logo" />
      </div>
    </div>
  );
}
