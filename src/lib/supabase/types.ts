export type Database = {
  public: {
    Tables: {
      team_members: {
        Row: {
          id: string;
          name: string;
          role: string;
          bio: string | null;
          image_url: string | null;
          order: number;
          created_at: string;
        };
        Insert: {
          name: string;
          role: string;
          bio?: string | null;
          image_url?: string | null;
          order?: number;
        };
        Update: {
          name?: string;
          role?: string;
          bio?: string | null;
          image_url?: string | null;
          order?: number;
        };
      };
      events: {
        Row: {
          id: string;
          title: string;
          slug: string;
          description: string;
          content: string | null;
          location: string | null;
          start_date: string;
          end_date: string | null;
          image_url: string | null;
          is_featured: boolean;
          status: "upcoming" | "past" | "cancelled";
          created_at: string;
        };
        Insert: {
          title: string;
          slug: string;
          description: string;
          content?: string | null;
          location?: string | null;
          start_date: string;
          end_date?: string | null;
          image_url?: string | null;
          is_featured?: boolean;
          status?: "upcoming" | "past" | "cancelled";
        };
        Update: Partial<Database["public"]["Tables"]["events"]["Insert"]>;
      };
      publications: {
        Row: {
          id: string;
          title: string;
          slug: string;
          description: string | null;
          category: string;
          file_url: string;
          cover_image_url: string | null;
          author: string | null;
          published_date: string;
          created_at: string;
        };
        Insert: {
          title: string;
          slug: string;
          description?: string | null;
          category: string;
          file_url: string;
          cover_image_url?: string | null;
          author?: string | null;
          published_date: string;
        };
        Update: Partial<Database["public"]["Tables"]["publications"]["Insert"]>;
      };
      news_articles: {
        Row: {
          id: string;
          title: string;
          slug: string;
          excerpt: string;
          content: string;
          category: string;
          image_url: string | null;
          author: string;
          is_featured: boolean;
          published_at: string;
          created_at: string;
        };
        Insert: {
          title: string;
          slug: string;
          excerpt: string;
          content: string;
          category: string;
          image_url?: string | null;
          author: string;
          is_featured?: boolean;
          published_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["news_articles"]["Insert"]>;
      };
      partners: {
        Row: {
          id: string;
          name: string;
          category: string;
          logo_url: string | null;
          website_url: string | null;
          description: string | null;
          order: number;
          created_at: string;
        };
        Insert: {
          name: string;
          category: string;
          logo_url?: string | null;
          website_url?: string | null;
          description?: string | null;
          order?: number;
        };
        Update: Partial<Database["public"]["Tables"]["partners"]["Insert"]>;
      };
      gallery_items: {
        Row: {
          id: string;
          title: string;
          description: string | null;
          image_url: string;
          category: string | null;
          event_id: string | null;
          order: number;
          created_at: string;
        };
        Insert: {
          title: string;
          description?: string | null;
          image_url: string;
          category?: string | null;
          event_id?: string | null;
          order?: number;
        };
        Update: Partial<Database["public"]["Tables"]["gallery_items"]["Insert"]>;
      };
      contact_submissions: {
        Row: {
          id: string;
          name: string;
          email: string;
          subject: string;
          message: string;
          is_read: boolean;
          created_at: string;
        };
        Insert: {
          name: string;
          email: string;
          subject: string;
          message: string;
        };
        Update: {
          is_read?: boolean;
        };
      };
      newsletter_subscribers: {
        Row: {
          id: string;
          email: string;
          name: string | null;
          is_active: boolean;
          created_at: string;
        };
        Insert: {
          email: string;
          name?: string | null;
        };
        Update: {
          is_active?: boolean;
        };
      };
      membership_applications: {
        Row: {
          id: string;
          organization_name: string;
          organization_type: string;
          contact_name: string;
          email: string;
          country: string;
          motivation: string | null;
          status: "pending" | "approved" | "rejected";
          created_at: string;
        };
        Insert: {
          organization_name: string;
          organization_type: string;
          contact_name: string;
          email: string;
          country: string;
          motivation?: string | null;
        };
        Update: {
          status?: "pending" | "approved" | "rejected";
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
};

// Convenience types
export type TeamMember = Database["public"]["Tables"]["team_members"]["Row"];
export type Event = Database["public"]["Tables"]["events"]["Row"];
export type Publication = Database["public"]["Tables"]["publications"]["Row"];
export type NewsArticle = Database["public"]["Tables"]["news_articles"]["Row"];
export type Partner = Database["public"]["Tables"]["partners"]["Row"];
export type GalleryItem = Database["public"]["Tables"]["gallery_items"]["Row"];
export type ContactSubmission = Database["public"]["Tables"]["contact_submissions"]["Row"];
export type NewsletterSubscriber = Database["public"]["Tables"]["newsletter_subscribers"]["Row"];
export type MembershipApplication = Database["public"]["Tables"]["membership_applications"]["Row"];
