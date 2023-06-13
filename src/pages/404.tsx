export default function NotFound404() {
    return (
      <div className="flex h-[58vh] flex-col items-center justify-center text-center">
        <h1 className="text-[200px] font-bold  text-[#2A9D8F]">Oops!</h1>
        <h2 className="pb-5 pt-2 text-2xl font-semibold  text-[red]">404 - PAGE NOT FOUND</h2>
        <p className="w-1/2 text-xl">
            Mohon maaf, untuk halaman yang Anda cari mungkin telah dihapus karena namanya telah diubah atau untuk sementara tidak tersedia
        </p>
      </div>
    );
  }