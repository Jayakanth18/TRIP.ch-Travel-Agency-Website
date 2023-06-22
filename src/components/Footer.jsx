const Footer = () => {
  const year = new Date().getFullYear();
  console.log(year);
  return (
    <div className=" w-full py-8 m-auto border-t-4 border-[var(--primary-light)]">
      <div className="flex justify-center items-center">
        <h1 className="text-[var(--primary-dark)]">TRIP.ch</h1>
      </div>
      <p className="text-center text-lg">&copy;{year}</p>
    </div>
  );
};

export default Footer;
