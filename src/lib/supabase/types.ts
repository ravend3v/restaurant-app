//src/lib/supabase/types.ts
export type Database = {
    public: {
        Tables: {
            profiles: {
                Row: {
                    id: string;
                    updated_at: string | null;
                    username: string | null;
                    full_name: string | null;
                    email: string | null;
                };
                Insert: {
                    id: string;
                    updated_at?: string | null;
                    username?: string | null;
                    full_name?: string | null;
                    email?: string | null;
                };
                Update: {
                    id?: string;
                    updated_at?: string;
                    username?: string | null;
                    full_name?: string | null;
                    email?: string;
                };
            };
        };
    };
};