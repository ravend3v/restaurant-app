import '../app/globals.css';
import { AuthProvider } from '@/lib/providers/auth-provider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="dark">
            <body>
                <AuthProvider>{children}</AuthProvider>
            </body>
        </html>
    );
}