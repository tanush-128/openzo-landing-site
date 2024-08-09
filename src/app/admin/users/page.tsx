"use client";
import { useEffect, useState } from "react";
import {
  deleteInvitation,
  getPendingInvitations,
  getUserAdmins,
  getUserEditors,
} from "../blog/action";
import { Invitation, User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import AddMemberModal from "./addMember";

const UsersRolePage = () => {
  const [adminUsers, setadminUsers] = useState<User[]>([]);
  const [editorUsers, seteditorUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [invitations, setInvitations] = useState<Invitation[]>([]);

  useEffect(() => {
    getUserAdmins().then((users) => {
      setadminUsers(users);
      setLoading(false);
    });

    getUserEditors().then((users) => {
      seteditorUsers(users);
      setLoading(false);
    });

    getPendingInvitations().then((invitations) => {
      setInvitations(invitations);
    });
  }, [isModalOpen]);

  return (
    <div className="max-w-3xl">
      <div className="mb-6 flex items-center justify-between">
        <div className=" text-3xl font-bold">All Members</div>
        <button
          onClick={() => setIsModalOpen(true)}
          className=" flex items-center rounded-lg bg-blue-500 px-3 py-2 font-bold text-white"
        >
          <Plus size={18} className="mr-2" />
          Add Member
        </button>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Table className="max-w-3xl">
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Actions</TableHead>
                {/* <TableHead>Created By</TableHead> */}
              </TableRow>
            </TableHeader>
            <TableBody>
              {adminUsers.map((user) => (
                <UserRow user={user} />
              ))}
              {editorUsers.map((user) => (
                <UserRow user={user} />
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      <div className="mt-12">
        <div>
          <h2 className="text-xl font-bold">Invitations</h2>
          <div>
            <Table className="max-w-3xl">
              <TableHeader>
                <TableRow>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invitations.map((invitation) => (
                  <TableRow key={invitation.id}>
                    <TableCell>{invitation.email}</TableCell>
                    <TableCell>{invitation.role}</TableCell>
                    <TableCell>
                      <button
                        onClick={() => {
                          deleteInvitation(invitation.id);
                          setInvitations(
                            invitations.filter((i) => i.id !== invitation.id),
                          );
                        }}
                        className="text-red-500"
                      >
                        Delete
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      <AddMemberModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default UsersRolePage;

const UserRow = ({ user }: { user: User }) => {
  return (
    <TableRow key={user.id}>
      <TableCell>
        <div className="flex items-center gap-2">
          <Image
            src={user.image ?? ""}
            alt=""
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <strong>{user.name}</strong>
            <p>{user.email}</p>
          </div>
        </div>
      </TableCell>
      <TableCell>{user.role}</TableCell>
      <TableCell>
        <button className="text-red-500">Delete</button>
      </TableCell>
    </TableRow>
  );
};

const UserCard = ({ user, className }: { user: User; className?: string }) => {
  return (
    <div className={" border-gray-100 " + className}>
      <a href="#" className="flex items-center gap-2 p-4 ">
        <img
          alt=""
          src={user.image ?? ""}
          className="size-10 rounded-full object-cover"
        />

        <div>
          <p className="text-xs">
            <strong className="block font-medium"> {user.name}</strong>

            <span> {user.email} </span>
          </p>
        </div>
      </a>
    </div>
  );
};

export { UserCard };
