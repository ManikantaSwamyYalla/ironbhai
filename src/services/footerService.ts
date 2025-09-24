export interface ConfigResponse {
  ok: boolean;
  status: number;
  data: {
    id: number;
    name: string;
    full_name: string;
    website_url: string;
    logo_image: string;
    logo_dark_image: string | null;
    favicon: string | null;
    copyright: string;
    sales_tax: number;
    sales_tax_title: string;
    service_charges: number;
    service_charges_title: string;
    delivery_partner_fee: number;
    delivery_partner_fee_title: string;
    platform_fee: number;
    platform_fee_title: string;
    handling_fee: string;
    handling_fee_title: string;
    min_cart_value: number;
    show_delete_account: boolean;
    contact_us: {
      email: string;
      address: string | null;
      phone: string;
    };
    links: {
      faq: string | null;
      terms_condition: string | null;
      privacy_policy: string | null;
      refund_policy: string | null;
      about_us: string | null;
    };
    app_links: {
      play_store: string;
      app_store: string;
    };
    social_links: {
      facebook: string | null;
      twitter: string | null;
      youtube: string | null;
      instagram: string | null;
    };
  };
}

const API_URL = "https://api-dev.ironbhai.com/v1/config";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uX25hbWUiOiIxLjAuMCIsInZlcnNpb25fY29kZSI6IjEiLCJkZXZpY2VfaWQiOiI4YTYzNzYzZC0yZTMwLTRhZjAtOWIwZC02M2JkMDQwNDZhZjUiLCJkZXZpY2VfdHlwZSI6ImlvcyIsImRldmljZV9tb2RlbCI6ImlQaG9uZTE0LDUiLCJpYXQiOjE3NTUwMTI1MTZ9.YE-Fl6ZkPW5VYqF9J7edXEuWsPJAUPI1g2sjRFSRwSg";

export async function fetchConfig(): Promise<ConfigResponse> {
  const res = await fetch(API_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch config: ${res.status}`);
  }

  return res.json();
}