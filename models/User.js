const { Schema, model } = require('mongoose');


const userSchema = new Schema(
  {
    username: {
        type: String,
        unique: true, 
        required: true,
        trim: true,
    },

    email:{
        type: String,
        unique: true, 
        required: true,
        validate: {
            validator: function(v) {
              return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(v);
            },
            message: props => `${props.value} is not a valid email!`
          },
    },

    thoughts: [{type: Schema.Types.ObjectId, ref: 'thought'}],

    friends: [{type: Schema.Types.ObjectId, ref: 'user'}]
        
    
    
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });

const User = model('user', userSchema);

module.exports = User;
