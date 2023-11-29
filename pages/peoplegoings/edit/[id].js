import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSinglePerson } from '../../../api/peopleGoing/peopleGoings';
import PeopleForm from '../../../components/forms/PeopleGoingForm';

export default function EditMember() {
  const [editPerson, setEditPerson] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSinglePerson(id).then(setEditPerson);
  }, [id]);

  // TODO: pass object to form
  return (<PeopleForm peopleObj={editPerson} />);
}
