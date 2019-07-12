import React from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import { useMeetupEvents } from "../effects/meetupEffects";

const PastMeetups = () => {
  const [groupName, setGroupName] = React.useState("");
  const [fetchTriggered, setFetchTriggered] = React.useState(false);
  const { fetching, events } = useMeetupEvents(fetchTriggered ? groupName : "");
  return (
    <div style={{ padding: "50px" }}>
      <TextField
        id="outlined-meetup-name"
        label="Meetup Name"
        value={groupName}
        onChange={e => setGroupName(e.target.value)}
        margin="normal"
        variant="outlined"
      />
      <Button onClick={() => setFetchTriggered(true)}>Search</Button>
      {fetching && (
        <Typography variant="h4" color="error">
          Fetching...
        </Typography>
      )}
      {events && events.length && events.length > 1 && JSON.stringify(events)}
    </div>
  );
};

export default PastMeetups;
