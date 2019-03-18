# VUE JS : props et $emit

props : propriété que reçoit une composant
$emit : évenement qui est émit.

## Structure

this.$emit("event-name", contenu)

-event-name est le nom de l'évenement à récupérer
-contenu est ce qui est envoyé lors de l'emission (sera récupéré dans $event)
!!! Attention, le nom de l'évenement doit être écrit avec une notation kebab-case(brochette avec des tirets - )
