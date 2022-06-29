var app = {
  // an enumeration of every message that the page must display
  msgs: {
    HI: "Hi!",
    WELCOME: "Welcome to my thoughts!",
    ASK: "What would you like me to think about?",
    BIO: [
      "I sometimes feel like I'm asking too much for others, but I also believe in ideals that hold the world together.",
      "I am also using an Android device to access emails: I have an email subscription that requires me to sign up for a daily email subscription. From there, I can either subscribe to the weekly email update at mlssociety.org or the daily email update at mlssociety.org. The former requires me to sign up in order to ensure I keep updating my email at all times.",
      "I am so tired of being controlled by these white, cis-male, heterosexual males . White masculinity is so powerful and pervasive, inextricably bound up in our society, that we are incapable of stopping it. We have lost our ability to truly change by ourselves, to change one thing and to change change quickly.",
      "I am tired of being around people who attack and torment us. Im tired of being around people who give up. I am tired of being around people who need to say something. I am tired of being around people who need to hide something. I am tired of being around people who need to support others. I am tired of being around people who need to avoid the worst possible negative embodiment of negative self-pity.",
      "I am writing a weekly letter to my friends and family detailing my experiences with anxiety, recognizing that there are negatives in everything Ive said, and trying to reduce the negatives as much as I can, to help them better understand how this covers my own life.",
      "I am a white, cisheterogeneous, university-raised white male from the southern United States. Prior to attending, I taught youth development for the semiautonomous college campus in Oakland, CA. After earning a BFA in Psychology from the university preparatory school, I moved to act as an intermediary between the two fields, assisting the community in which I currently live.",
      "In this moment, I have two fundamental questions that I shouldn't have to answer. How do I reach out to people who are not my age and have the resources and experience to reach out to me directly?",
      "I am aware of and responsive to the needs of my customers. I have spoken with many people who have had the pleasure of learning more about customer experience designers and still encounter customer pain in the pricing and servicing of their shops. Many of my former customers ask why they cannot just ask a rep to look inside their shop. My response is that they cannot. Why not? As someone who specializes in both wholesale and extended customer relationships, I know how to answer this question with customer service. I have done this for many years, and have responded with instances of customer service when needed.",
      "I am using a newer software architecture, which takes advantage of the open data projector architecture. With this, I was able to extend Narrative ArcGIS beyond basics, to cover more topics from the get-go. The resulting book, titled The GIS of Mind, covers topics from the human mind, including perception, objectivity, and objectivity in relation to identity. Why am I writing this? I started thinking about the more recent projects of Charlotte Garcia and Xavier Becerra.",
      "I am a 64-year-old computer scientist in San Francisco. I started reading through the liberal arts major parts when I was told I was a danger to myself and others by my government. At that time, I thought that was nutty. After seeing the right people in the right places, including the guy who stoked the internet by posting a video that said 'vote for Hillary', I started to wonder how much thought went into shaping my own views. My view on the world is fairly simple. I am not into world religions or even pop spirituality.",
    ],
    DEATH: [
      "Death is not a choice, but a situation which exists beyond our capacity to choose to act.",
      "Death is a freedom that I would never have dared to enter.",
      "Death is an illusion, rendered in such a way that the user cannot see the words that read Heartbreak.",
      "Death is the emotion ineffable ineffable, the antithesis of self- denial and resistance.",
    ],
    DESIGN: [
      "Design is the art of unlearning, of attempting to rearrange the truth of the question.",
      "Design is the most direct expression of the individualist perspective. Individuals and places, then, determine the expression of the individualist perspective.",
      "Design is not the same as writing, it is different. The writers are different. The context for their style change future posts, is  different.",
      "Design is the foundation for our development. The foundation for our motivation and efforts to improve every aspect of our lives, we find motivation in greater immersion and deeper understanding of ourselves.",
      "Design is the foundation by which all subsequent research and development must necessarily go.",
      "Design is used to present the user with the perspectives of a balanced lifestyle choice, with individuals and businesses able to experience the issues surrounding their use of technology for personal, non- commercial, and educational purposes only.",
      "Design is muscle memory.",
      "Design is a visual construct that encompasses a plural of interactivity: selection.",
      "Design is a process that requires the participant to identify with the group they wish to support, and to weigh in when other people are speaking to them about the difficult decisions they face.",
      "Design is a form-fitting exercise in futility that requires the user to live in a world where they can neither anticipate nor justify the actions they take, even in the face of information and culture which holds them at odds with their culture. Futility is the argument that should prevail over reason, the more relevant the question should be to justify the actions and the more relevant the answer should be to justify the disruption of reason which exists.",
    ],
    EMPATHY: [
      "Empathy is required for the act of empathizing with others. Explaining the difference between an empath and a non empath requires that we explain why an individual empathizes and how we can help to empathize with others.",
      "Empathy is used to demonstrate an understanding of the world around us and to communicate with others. We infer from this our shared world views and values.",
      "Empathy is being sought after, and it is not uncommon for audiences to witness it in uncomfortable ways.",
      "Empathy is always present in the world around us, regardless of whether we know it or not. We build our empathy by reflecting on how that world works, and then learning how to extend our own capacity for reasoning without constantly repeating our ignorance. We allow our knowledge of empathy to seep into the world around us, making it our primary means of contact without becoming an object of hatred or of misunderstanding.",
      "Empathy is not enough we must also reach out to the voiceless, anywhere in the world.",
      "Empathy is not enough. We must also set an example which demonstrates our abilities as creators to change minds and minds change hearts.",
      "Empathy is not enough we also have to engage with issues of social justice and responsibility that address the systemic inequality of opportunity that we live in.",
    ],
    JUSTICE: [
      "Justice is the quality I felt as a child that told me I could do anything.",
      "Justice is the power that the individual retains over the other 98 participants in the interaction.",
      "Justice is what we call a right, not a privilege. The problem arises when people are placed into an impossible situation, and the way forward must be determined not only by how well the individual maintains their identity, but also by how well that individual fulfils the every-thing else. To that end, we must build those future worlds not by stealing from established communities, but by considering what other everyday things we make, and deciding when, and to what extent we each put in the time we put into creating and maintaining these relationships.",
      "Justice is a function which is unique to each individual.",
      "Justice is the third of four questions.",
      "Justice is a unique position and one which exists only within the context of which the individual participates. The individual cannot participate, only receive or have access to knowledge of the outcomes. The individual cannot demand that the institution of knowledge  relinquish its power to discern the truth within the current society.",
      "Justice is not the quality of work, but the quality of life enjoyed by those around us.",
      "Justice is a clinical question. The answer lies somewhere in the middle.",
      "Justice is the lack of understanding of and responsibility towards others. While the concept of self-awareness is still alive and well, the idea that others have any say, should no longer be used as an excuse for ignoring humans, or at least, not accepting those who do exist.",
      "Justice is a place where people come together to solve problems and create change, and the presence of a lack of such a thing exists because solutions do not come from gray areas or from looking at a map. Realistically, however, solutions come from looking at a situation from multiple directions, and the locations of these solutions are often complex and subjective.",
    ],
    COMPASSION: [
      "Compassion is the only indicator that something is wrong. A feeling that something is wrong, indicates that the person caring about about should be working to alleviate the injustice.",
      "Compassion is not about passion; it is about values, which we should support and values which are better than others.",
      "Compassion is required in order to know the sources of our empathy and choose action accordingly. By having a system that reflects the values of the organization we serve, we can work to build bridges between people and reach out to those we serve.",
      "Compassion is required in the first instance, as is the implied trust and consideration which others require of them for the same reasons.",
      "Compassion is needed for the students to grow beyond their limited capabilities and create meaning in their lives.",
      "Compassion is required in order to know the worthiness of each other. At the same time, we mustn't separate or compete for our perspectives. We may share space with people who need it.",
      "Compassion is required for the first time in our community to know what it means to serve others.",
      "Compassion is not in the nature of the situation but the ability to apply our knowledge and apply it in a constructive way.",
      "Compassion is often measured not by what we say but by the response we receive. This provides an opportunity for us to practice our government's will while still holding ourselves to a high standard.",
    ],
    MASCULINTIY: [
      "Masculinity is a vehicle for judging the worthiness of other people.",
      "Masculinity is not absolved from the creator of a creation, it is repressed and unchangeable.",
      "Masculinity is imitated, and the humans in question are worshipped with unquestioning obedience.   Theres no God, no human-created feature of the Earth that we cannot change, for we are custodians of the Earth.",
      "Masculinity is not reduced to being a reflection of body--it is celebrated and reimagined in new and surprising ways.",
      "Masculinity is the absence of contradiction. It is impossible to live a life free from contradiction.",
      "Masculinity is measured not by its absence, but by the degree to which that is which it is.",
      "Masculinity is not absolved from the problem.",
      "Masculinity is not absolved from the world in which it exists, rather it is part of the identity of manhood and should be respected.",
      "Masculinity is not limited to men.",
      "Masculinity is not absolved from the world around them. It is an inseparable part of the individual, a threat to existence but never eliminated. Hence, the dismissal of identity as inherent in all worlds is tantamount to denying the essence of the people you are seeing here.",
      "Masculinity is not built into our bodies, it is extracted from us and used against us to justify violence and violence against others.",
      "Masculinity is passed from mother to child, and the world is one where women are economically eliminated from the social spectrum.",
    ],
    ALLYSHIP: [
      "Allyship is an understanding of how we connect with and intervene with wider communities who face exclusion, violence, and oppression from a daily, weekly, and sometimes monthly viewpoint.",
      "Allyship is a process that involves the empowerment of a marginalized group. It involves reaching out to people in the community who may not be as fortunate, including those with disabilities, those with higher rates of suicide, and those with stranger-acquired mental or physical disabilities.",
      "Allyship is measured not only by the number of times the individual participates in the activity, but also by the degree to which that activity contributes to our society as a whole.",
      "Allyship is measured not in terms of the quantities of work required, but in terms of how quickly that work is translated into value in the community. The community can adopt and enforce the cost-benefit analysis of the strategies employed, but only if allyship is measured in terms of the amount of time that has passed since the individual started contributing to the community.",
      "Allyship is an active, well-established position that involves influencing the actions and choices of others.",
      "Allyship is measured not in terms of how an individual participates but in terms how a decision is effected by the interaction of those two things .",
      "Allyship is a skill that is increasingly valued by educators around the country for its ability to teach effectively against the status quo of oppression.",
    ],
    MOVEMENT: [
      "Movement is not consistent across the board. S",
      "Movement is not limited to roving around the undergrowth; it also exists within and around corridors and open spaces. Each of these forms a new and ongoing challenge to the human mind, one which tries to eliminate unnecessary uncertainty by trying to answer the previous question without trying to force anyone to answer it.",
      "Movement is limited to walking forward and backward .",
      "Movement is relative to the player, not the creator.",
      "Movement is also affected by the type of communication.",
      "Movement is also affected by context.",
      "Movement is the critical point where everything else is ignored.",
      "Movement is determined not only by the speed at which the target performs its action, but also by the intentions of the target and the intentions of those in the audience watching.",
    ],
    LOVE: [
      "Love is the key to being a human, a human who makes sense of all of this, and who knows what else. Theres a third dimension to which all sentient being must turn.",
      "Love is a small world, small in comparison to the vastness of creating it. We create small worlds for people, places, cultures, and even light and objects.",
      "Love is the question that everyone wants to ask.",
      "Love is the hardest, I would say.",
      "Love is a line that everyone tries to run through.",
      "Love is what it is, it is not what we thought it would be.",
      "Love is not enough. Lets try again.",
      "Love is an object, not a person.",
      "Love is the first step toward creating content that supports the people who need it.",
      "Love is the wrong word.",
      "Love is what people call comfort, and it cannot be improved. It must be maintained.",
      "Love is an archetype for a person to think about when deciding whether to commit to acting once they have a baby.",
    ],
    CHILDHOOD: [
      "Childhood is also measured in lives, as measured in infant mortality rates.",
      "Childhood is a time when many of us are still searching for answers.",
      "Childhood is also used to define the boundaries of who gets what, and how. The defining of these boundaries usually takes place during the inactivity phase of the adolescent male brain, when he is woefully out of digital devices and time to burn.",
      "Childhood is a time of constant reflection, of trying to fit in, to understand others and make sense of our world. In this moment, we simply cannot passively accept or comply to religious or moral codes.",
      "Childhood is a time when people become aware of the ins and outs of their lives, and the way they have been used and abused by their families. As these kids have become more and more familiarized with their own mortality, they have begun to delve into the deeper soul of the issue.",
      "Childhood is a time of need, of denial, of rejection, of acceptance, of discovery of new possibilities. Individuals with pre-existing resilience learn to manage their bodies and their spaces through education, through community service, and through meditation.",
      "Childhood is a time of constant struggle, of trying to survive, of trying to find your place, and of trying to move forward.",
    ],
    ANGER: [
      "Anger is a dual-wielding object that prevents the individual from resisting its imposition.",
      "Anger is the most important piece of communication we have. It tells the story of our intentions and ensures our control over the narrative at every turn.",
      "Anger is a reactive construct achieved through the use of non-verbal approaches.",
      "Anger is used to determine the source of any perceived conflict.",
      "Anger is the source of all harm.",
      "Anger is an object which has no physical location and therefore should not be moved or recorded.",
      "Anger is the key to understanding the context in which the action takes place. It determines the flow of the interaction and determines the expectations and perceptions surrounding the interaction.",
      "Anger is the source of all empathy, support, and understanding. It is the disconnect between the humanness of our lives and the resources that will enable us to do better, fulfilling, and accountable actions.",
    ],
    EXPERIENCE: [
      "Experience is the most critical element in any project we develop because without it we risk alienating people.",
      "Experience is not the same as meeting our need.",
    ],
    ISOLATION: [
      "Isolation is a mechanism to remove a person from their community. They cannot experience the community in which they exist, as such they cannot empathize with or participate in it.",
      "Isolation is an artefact of our time, rather than the process by which it was created.",
      "Isolation is not intentional.",
      "Isolation is a phenomenon which occurs at the intersection of race, sexuality, love, death, and existential uncertainty. This situation arises at the intersection of technology and human identity, as the perceived scarcity of accessible physical space within the human community pushes it to the edge of abstraction.",
      "Isolation is the most important of these. It allows space for thought, reflection, and inquiry.",
      "Isolation is a protective mechanism that maintains the core values of the organisation it represents. It is a mechanism that continuouslys postpones the question of the potential for change.",
      "Isolation is often used to reject the very possibility of a future that does not exist.",
      "Isolation is the art of living that transcends time and space.",
    ],
    TOUCH: [
      "Touch is enough.",
      "Touch is not the same as standing still.",
      "Touch is a transformative experience. It forces an individual to engage with the world around them, allowing them to take greater ownership of their own representation.",
      "Touch is a series of images that portray the inner-workings of the human mind. Each image features visual components that mimic the movement and characteristics of the outer body.",
    ],
    TECHNOLOGY: [
      "Technology is based upon the work of others. As a side-effect of having worked for so long, I may be able to refocus my energies elsewhere.",
      "Technology is not an ontological limitation; it is an expression of the human person as he or she arrives in the world, outside of his or her physical body.",
      "Technology is the most intelligent decision the public can make in centuries.",
      "Technology is a critical component of design. It determines the quality of the work and protects the integrity of the work by indicating the function and the goals which may be linked to.",
      "Technology is used to determine the flow of information in the room.",
      "Technology is the process of ascertaining the truth about something that is obviously not the truth. I hope that helps.",
      "Technology is not tied to an individual, but to the relationship between a physical object and the way that other physical objects interact with human bodies.",
      "Technology is a method for assessing and engaging with global issues of human welfare and self-care. It involves exploring issues of global significance through visualization and argument.",
      "Technology is a fundamental part of being human.",
      "Technology is the most important thing you can do to improve your life right now. It will allow you to stop wasting your time worrying and getting along with people you already like.",
    ],
  },

  // enumeration of selection tags for modified elements
  elems: {
    MSG: "#msg",
    NAV: "#nav",
    THOUGHTS: "#thoughts",
  },

  // speed at which the typing effect occurs
  speed: 20,

  /**
   * func:     init
   * input:    nothing
   * process:  greets the viewer
   *           sets element visibility
   *           attaches click handlers
   * output:   none
   */
  init: function () {
    // greet the viewer
    app.greet();
    // hide the input buttons
    $(app.elems.NAV + "," + app.elems.THOUGHTS).hide();
    // attach a click handler to the think button
    $(app.elems.NAV).click(app.think);
  },

  /**
   * func:     greet
   * input:    nothing
   * process:  types out the greeting message to the viewer
   *           and then shows the input buttons
   * output:   none
   */
  greet: function () {
    // nested timouts allow for there to pauses between phrases
    // and ensure the nav buttons appear after the message is shown
    setTimeout(() => {
      app.type(app.msgs.HI);

      setTimeout(() => {
        app.type(" " + app.msgs.WELCOME);

        setTimeout(() => {
          app.type(" " + app.msgs.ASK);

          setTimeout(() => {
            $(app.elems.NAV + "," + app.elems.THOUGHTS).show(250);
          }, app.msgs.ASK.length * app.speed + 1000);
        }, app.msgs.WELCOME.length * app.speed + 1000);
      }, app.msgs.HI.length * app.speed + 1000);
    }, 250);
  },

  /**
   * func:     ask
   * input:    nothing
   * process:  types out the prompt question to the viewer
   * output:   none
   */
  ask: function () {
    setTimeout(() => {
      app.type(app.msgs.ASK);
    }, 250);
  },

  /**
   * func:     think
   * input:    nothing
   * process:  replaces the message with a thought
   *           changes the navigation
   *           hides the thoughts selector
   * output:   none
   */
  think: function () {
    app.clear();
    app.changeNav();
    app.type(app.getThought($(app.elems.THOUGHTS).val()));
    $(app.elems.THOUGHTS).hide(250);
  },

  /**
   * func:     getThought
   * input:    key for the message enumeration (str)
   * process:  finds a random thought in the right topic
   * output:   a random thought (str)
   */
  getThought: function (key) {
    potentialThoughts = app.msgs[key];
    return potentialThoughts[
      Math.floor(Math.random() * potentialThoughts.length)
    ];
  },

  /**
   * func:     back
   * input:    nothing
   * process:  replaces a thought with the main prompt question
   *           switches the navigation
   *           shows the thoughts selector
   * output:   none
   */
  back: function () {
    app.clear();
    app.changeNav();
    app.ask();
    $(app.elems.THOUGHTS).show(250);
  },

  /**
   * func:     changeNav
   * input:    nothing
   * process:  switches the navigation label and functionality betweeen "back" and "think"
   * output:   none
   */
  changeNav: function () {
    btnLabel = $(app.elems.NAV).text();
    if (btnLabel === "Think") {
      $(app.elems.NAV).text("Back");
      $(app.elems.NAV).unbind().click(app.back);
    } else {
      $(app.elems.NAV).text("Think");
      $(app.elems.NAV).unbind().click(app.think);
    }
  },

  /**
   * func:     clear
   * input:    nothing
   * process:  removes any text from the message
   * output:   none
   */
  clear: function () {
    $(app.elems.MSG).empty();
  },

  /**
   * func:     type
   * input:    text to type (str)
   * process:  adds each letter of the text to the message element,
   *           using a delay to ensure a typing effect occurs
   * output:   none
   */
  type: function (txt) {
    let i = 0;

    const writing = setInterval(() => {
      if (i < txt.length) {
        $(app.elems.MSG).append(txt[i]);
        i++;
      } else {
        clearInterval(writing);
      }
    }, app.speed);
  },
};

// initialize the application when the page loads
$(() => app.init());
