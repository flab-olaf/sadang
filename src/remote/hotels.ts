import {
  collection,
  getDocs,
  query,
  limit,
  startAfter,
  type QueryDocumentSnapshot,
  type DocumentData,
} from "firebase/firestore";

import { COLLECTIONS } from "@constants";
import { Hotel } from "@models/hotel";
import { fireStore } from "@remote/firebase";

export async function getHotels(
  pageParam?: QueryDocumentSnapshot<DocumentData, DocumentData>
) {
  const hotelQuery =
    pageParam == null
      ? query(collection(fireStore, COLLECTIONS.HOTELS), limit(10))
      : query(
          collection(fireStore, COLLECTIONS.HOTELS),
          startAfter(pageParam),
          limit(10)
        );

  const hotelSnapshot = await getDocs(hotelQuery);

  // 전체 호텔중 맨 마지막 요소
  const lastVisible = hotelSnapshot.docs[hotelSnapshot.docs.length - 1];

  const hotels = hotelSnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id, // 고유한 문서 아이디를 부여
        ...doc.data(),
      } as Hotel)
  );

  return { hotels, lastVisible };
}
