import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState(prev => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  const setDay = day => setState(prev => ({ ...prev, day }));

  const updateSpots = (appointments) => {
    const dayObj = state.days.find(day => day.name === state.day);

    const spots = dayObj.appointments
      .filter(id => appointments[id].interview === null)
      .length;

    return state.days.map(day => day.name === state.day ? { ...day, spots } : day);
  };


  function bookInterview(id, interview) {

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const days = updateSpots(appointments);

    return axios.put(`/api/appointments/${appointment.id}`, { interview })
      .then(res => {
        setState({ ...state, appointments, days });
      });
  }

  function cancelInterview(id, interview) {

    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const days = updateSpots(appointments);

    return axios.delete(`/api/appointments/${appointment.id}`, { interview })
      .then(res => setState({ ...state, appointments, days }));
  }

  return { state, setDay, bookInterview, cancelInterview };

};