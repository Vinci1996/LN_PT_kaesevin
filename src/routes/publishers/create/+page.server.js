import db from "$lib/db.js";

export const actions = {
  create: async ({ request }) => {
    try {
      const data = await request.formData();
      
      let logoPath = '/images/publisher_placeholder.jpg';
      const logoFile = data.get('logo');
      
      if (logoFile && logoFile.size > 0) {
        const buffer = Buffer.from(await logoFile.arrayBuffer());
        logoPath = `data:${logoFile.type};base64,${buffer.toString('base64')}`;
      }

      let publisher = {
        name: data.get("name"),
        country: data.get("country"),
        logo: logoPath
      };

      await db.createPublisher(publisher);
      return { success: true };
    } catch (err) {
      console.error('Error:', err);
      return { success: false };
    }
  }
};