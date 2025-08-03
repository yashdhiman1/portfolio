// Campaigns data configuration
export interface Campaign {
  id: string;
  name: string;
  date: string;
  featuredImage: string;
  images: string[];
  description?: string;
}

// Base path for campaign images (now in public folder)
const CAMPAIGN_BASE_PATH = '/assets/campaigns';

export const campaigns: Campaign[] = [
  {
    id: 'kritisanon',
    name: 'Kriti Sanon',
    date: '2024',
    featuredImage: `${CAMPAIGN_BASE_PATH}/kritisanon/quality(80) (2).webp`,
    images: [
      `${CAMPAIGN_BASE_PATH}/kritisanon/quality(80) (2).webp`,
      `${CAMPAIGN_BASE_PATH}/kritisanon/quality(80).webp`,
      `${CAMPAIGN_BASE_PATH}/kritisanon/1CbbBjIScM4f0lL4eWfwlq.webp`,
      `${CAMPAIGN_BASE_PATH}/kritisanon/quality(80) (1).webp`,
      `${CAMPAIGN_BASE_PATH}/kritisanon/07HaJyzffCAglMIzgpvKnX.webp`
    ],
    description: 'Portrait photography campaign featuring Kriti Sanon'
  },
  {
    id: 'ranveer-indiasgottalent',
    name: 'Ranveer Singh - India\'s Got Talent',
    date: '2024',
    featuredImage: `${CAMPAIGN_BASE_PATH}/ranveer:indiasgottalent/7bcmGICMhS8cs3eB5udSbA.webp`,
    images: [
      `${CAMPAIGN_BASE_PATH}/ranveer:indiasgottalent/7bcmGICMhS8cs3eB5udSbA.webp`,
      `${CAMPAIGN_BASE_PATH}/ranveer:indiasgottalent/fonK7MceXlScjaKKe5LajP.webp`,
      `${CAMPAIGN_BASE_PATH}/ranveer:indiasgottalent/kav1LNh6jgmbVbfn2Pf0wY.webp`
    ],
    description: 'Campaign for India\'s Got Talent featuring Ranveer Singh'
  },
  {
    id: 'amyra',
    name: 'Amyra Dastur',
    date: '2024',
    featuredImage: `${CAMPAIGN_BASE_PATH}/amyra/quality(80).webp`,
    images: [
      `${CAMPAIGN_BASE_PATH}/amyra/quality(80).webp`,
      `${CAMPAIGN_BASE_PATH}/amyra/1CbbBjIScM4f0lL4eWfwlq.webp`,
      `${CAMPAIGN_BASE_PATH}/amyra/quality(80) (1).webp`
    ],
    description: 'Fashion campaign with Amyra Dastur'
  },
  {
    id: 'alia-bhatt',
    name: 'Alia Bhatt',
    date: '2024',
    featuredImage: `${CAMPAIGN_BASE_PATH}/alia bhatt/afSYGg40oplcRQ3y49nPPH.webp`,
    images: [
      `${CAMPAIGN_BASE_PATH}/alia bhatt/afSYGg40oplcRQ3y49nPPH.webp`,
      `${CAMPAIGN_BASE_PATH}/alia bhatt/i6EBVAGB2avcil39GGL8v7.webp`,
      `${CAMPAIGN_BASE_PATH}/alia bhatt/bQpOLdbiAXCemEJtGQYi78.webp`,
      `${CAMPAIGN_BASE_PATH}/alia bhatt/cWaLnUm8AGNcwuFEcYDfmh.webp`,
      `${CAMPAIGN_BASE_PATH}/alia bhatt/kLAXn2q2mL1g58miPLHfy5.webp`,
      `${CAMPAIGN_BASE_PATH}/alia bhatt/eCjfpuawWYXfF15ikmvWWT.webp`
    ],
    description: 'Portrait series featuring Alia Bhatt'
  },
  {
    id: 'karan-johar',
    name: 'Karan Johar',
    date: '2024',
    featuredImage: `${CAMPAIGN_BASE_PATH}/karanjohar/lwSgbVpxDLtfsxzn88Zfu5.webp`,
    images: [
      `${CAMPAIGN_BASE_PATH}/karanjohar/lwSgbVpxDLtfsxzn88Zfu5.webp`,
      `${CAMPAIGN_BASE_PATH}/karanjohar/7bE6tporPYFcVBiKvPlP9w.webp`,
      `${CAMPAIGN_BASE_PATH}/karanjohar/bgN6nigcVKredLSjWqnFtg.webp`,
      `${CAMPAIGN_BASE_PATH}/karanjohar/4hLOcWGdz3bfaYo7o0NPRT.webp`,
      `${CAMPAIGN_BASE_PATH}/karanjohar/aljLum2CaJ6eScWDBARDlX.webp`,
      `${CAMPAIGN_BASE_PATH}/karanjohar/3wrdGBbzTqHdaNaZpVzv3A.webp`
    ],
    description: 'Director portrait session with Karan Johar'
  },
  {
    id: 'hritik',
    name: 'Hrithik Roshan',
    date: '2024',
    featuredImage: `${CAMPAIGN_BASE_PATH}/hritik/quality(80).webp`,
    images: [
      `${CAMPAIGN_BASE_PATH}/hritik/quality(80).webp`,
      `${CAMPAIGN_BASE_PATH}/hritik/1CbbBjIScM4f0lL4eWfwlq.webp`,
      `${CAMPAIGN_BASE_PATH}/hritik/quality(80) (1).webp`
    ],
    description: 'Actor portrait campaign featuring Hrithik Roshan'
  },
  {
    id: 'ranveer-tomford',
    name: 'Ranveer Singh x Tom Ford',
    date: '2024',
    featuredImage: `${CAMPAIGN_BASE_PATH}/ranveerxtomford/quality(80).webp`,
    images: [
      `${CAMPAIGN_BASE_PATH}/ranveerxtomford/quality(80).webp`,
      `${CAMPAIGN_BASE_PATH}/ranveerxtomford/1CbbBjIScM4f0lL4eWfwlq.webp`,
      `${CAMPAIGN_BASE_PATH}/ranveerxtomford/quality(80) (1).webp`
    ],
    description: 'Fashion collaboration campaign with Tom Ford'
  }
];

// Function to get campaigns with admin overrides
export const getCampaigns = (): Campaign[] => {
  try {
    const adminConfig = localStorage.getItem('adminConfig');
    if (adminConfig) {
      const config = JSON.parse(adminConfig);
      if (config.campaigns && Object.keys(config.campaigns).length > 0) {
        return campaigns.map(campaign => {
          const adminCampaign = config.campaigns[campaign.id];
          if (adminCampaign) {
            return {
              ...campaign,
              name: adminCampaign.name || campaign.name,
              date: adminCampaign.date || campaign.date,
              description: adminCampaign.description || campaign.description,
              images: adminCampaign.images && adminCampaign.images.length > 0 
                ? adminCampaign.images 
                : campaign.images
            };
          }
          return campaign;
        });
      }
    }
  } catch (error) {
    console.error('Error loading admin campaigns:', error);
  }
  return campaigns;
}; 