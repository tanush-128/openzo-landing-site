const FourthSection = () => {
  return (
    <div className="flex items-center justify-center py-4 md:py-10">
      <div className="bg-gradient-to-r from-blue-800 to-purple-300 bg-clip-text pb-10 text-center text-4xl font-bold text-transparent md:text-6xl">
        Business Management System.Made Simple.
        <div className="flex items-center justify-center p-10 md:pt-10">
          <video className="rounded-xl md:w-2/3" autoPlay muted loop>
            <source src="/content/video-4.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
