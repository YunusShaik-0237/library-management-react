import { useMemo } from "react";

import booksData from "../data/booksData";
import membersData from "../data/membersData";
import issuesData from "../data/issuesData";

const useGlobalSearch = (searchTerm) => {
  const results = useMemo(() => {
    if (!searchTerm.trim()) return [];

    const keyword = searchTerm.toLowerCase();

    /* ===========================
       Books
    =========================== */

    const books = booksData
      .filter((book) => {
        return (
          book.title.toLowerCase().includes(keyword) ||
          book.author.toLowerCase().includes(keyword) ||
          book.isbn.toLowerCase().includes(keyword) ||
          book.accessionNo.toLowerCase().includes(keyword) ||
          book.category.toLowerCase().includes(keyword) ||
          book.publisher.toLowerCase().includes(keyword) ||
          book.language.toLowerCase().includes(keyword) ||
          book.status.toLowerCase().includes(keyword)
        );
      })
      .map((book) => ({
        id: book.id,
        type: "Book",
        title: book.title,
        subtitle: `${book.author} • ${book.category}`,
      }));

    /* ===========================
       Members
    =========================== */

    const members = membersData
      .filter((member) => {
        return (
          member.name.toLowerCase().includes(keyword) ||
          member.memberId.toLowerCase().includes(keyword) ||
          member.admissionNo.toLowerCase().includes(keyword) ||
          member.phone.toLowerCase().includes(keyword) ||
          member.email.toLowerCase().includes(keyword) ||
          member.course.toLowerCase().includes(keyword) ||
          member.department.toLowerCase().includes(keyword) ||
          member.status.toLowerCase().includes(keyword)
        );
      })
      .map((member) => ({
        id: member.id,
        type: "Member",
        title: member.name,
        subtitle: `${member.memberId} • ${member.course}`,
      }));

    /* ===========================
       Issues
    =========================== */

    const issues = issuesData
      .filter((issue) => {
        return (
          issue.issueId.toLowerCase().includes(keyword) ||
          issue.bookTitle.toLowerCase().includes(keyword) ||
          issue.memberName.toLowerCase().includes(keyword) ||
          issue.memberId.toLowerCase().includes(keyword) ||
          issue.isbn.toLowerCase().includes(keyword) ||
          issue.status.toLowerCase().includes(keyword)
        );
      })
      .map((issue) => ({
        id: issue.id,
        type: "Issue",
        title: issue.bookTitle,
        subtitle: `${issue.memberName} • ${issue.status}`,
      }));

    return [...books, ...members, ...issues];
  }, [searchTerm]);

  return results;
};

export default useGlobalSearch;