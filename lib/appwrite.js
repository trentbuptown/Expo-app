import { Alert } from "react-native";
import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Query,
  Storage,
} from "react-native-appwrite";
export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.jsm.aora",
  projectId: "66f3b635003e4f2a1a53",
  databaseId: "66f3b9210036563bea0f",
  userCollectionId: "66f3b954002cfc9bedff",
  videosCollectionId: "66f3bbaa002f69e368f8",
  storageId: "66f3c14300350603857a",
  appName: "jsm_aora",
};

const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

const account = new Account(client);
const avavtars = new Avatars(client);
const databases = new Databases(client);

export async function createUser(email, password, username) {
  try {
    // const randomString = Math.random().toString(36).substring(2, 15);

    // // Combine username and random string to create user ID
    // const ID = `${username.replace(/[^a-zA-Z0-9.-_]/g, "").toLowerCase()}_${randomString}`;
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username,
    );
    console.log("User ID:", newAccount.$id);

    if (!newAccount) throw Error;

    // const avatarUrl = avatars.getInitials(username)

    await signIn(email, password);

    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      newAccount.$id,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        // avatar: avatarUrl,
      }
    )

    return newUser;
  } catch (error) {
    throw new Error(error);
  }
}
export const signIn = async (email, password) => {
  try {
    const session = await account.get(email, password);
    return session;
  } catch (error) {
    throw new Error(error);
  }
}



export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();

    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)],
      // Ví dụ: Nếu currentAccount.$id = "123", 
      // thì câu truy vấn sẽ tìm các bản ghi có accountId = "123".
    )
    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}
