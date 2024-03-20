import { prisma } from "./prisma";

export const getContacts = async (query: string, currentPage: number) => {
    try {
        const contacts = await prisma.contact.findMany({
            where: {
                OR: [
                    {
                        name: {
                            contains: query,
                            mode: "insensitive" // untuk mencari data yang tidak peduli upper dan lower case 
                        }
                    },
                    {
                        email: {
                            contains: query,
                            mode: "insensitive"
                        }
                    },
                    {
                        phone: {
                            contains: query,
                            mode: "insensitive"
                        }
                    }
                ]
            }
        });
        return contacts;
    } catch (error) {
        throw new Error("Failed to fetch contact data"); 
    }
};

export const getContactById = async (id: string) => {
    try {
        const contact = await prisma.contact.findUnique({
            where: {id}
        });
        return contact;
    } catch (error) {
        throw new Error("Failed to fetch contact data"); 
    }
}