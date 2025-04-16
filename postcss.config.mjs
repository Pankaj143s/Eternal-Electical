/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // ✨ Enable static export
    images: {
        unoptimized: true, // Avoids using Next.js image optimizer
    },
    trailingSlash: true, // Optional but recommended for Hostinger
};

export default nextConfig;
